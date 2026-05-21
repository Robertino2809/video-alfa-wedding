<?php
// ============================================================
// LOKACIJA: public/api/contact.php
// Nakon next build/export, ovaj file završava na:
// public_html/api/contact.php
// Dostupan na: https://www.video-alfa.hr/api/contact.php
// ============================================================

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: https://www.video-alfa.hr");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Blokiraj sve osim POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed."]);
    exit;
}

// Primanje JSON body-a
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Neispravan zahtjev."]);
    exit;
}

// ─── SANITIZACIJA ────────────────────────────────────────────
function sanitize(string $value): string {
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, "UTF-8");
}

$name     = sanitize($data["name"]     ?? "");
$email    = sanitize($data["email"]    ?? "");
$date     = sanitize($data["date"]     ?? "");
$location = sanitize($data["location"] ?? "");
$message  = sanitize($data["message"]  ?? "");

// ─── VALIDACIJA ──────────────────────────────────────────────
$errors = [];

if (empty($name)) {
    $errors[] = "Ime i prezime su obavezni.";
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Email adresa nije ispravna.";
}

if (empty($message)) {
    $errors[] = "Poruka je obavezna.";
}

// Honeypot — ako je popunjen, bot je
if (!empty($data["website"] ?? "")) {
    http_response_code(200);
    echo json_encode(["success" => true]);
    exit;
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(["success" => false, "message" => implode(" ", $errors)]);
    exit;
}

// ─── EMAIL ───────────────────────────────────────────────────
$to      = "alfavjencanja@gmail.com";
$subject = "Novi upit s web stranice – " . $name;

$body  = "Novi upit s web stranice Video Alfa:\n\n";
$body .= "Ime i prezime: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Datum vjenčanja: " . ($date ?: "Nije navedeno") . "\n";
$body .= "Lokacija vjenčanja: " . ($location ?: "Nije navedeno") . "\n\n";
$body .= "Poruka:\n" . $message . "\n";

$headers  = "From: noreply@video-alfa.hr\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Upit je uspješno poslan."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Slanje nije uspjelo. Pokušajte nas kontaktirati direktno."]);
}