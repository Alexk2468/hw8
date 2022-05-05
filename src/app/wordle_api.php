<?php
// REQUIRED HEADERS FOR CORS
// Allow access to our development server, localhost:4200
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT");

$wordleData = file_get_contents("https://www.cs.virginia.edu/~jh2jf/courses/cs4640/spring2022/wordlist.txt");
$wordleData = explode("\n", $wordleData);
$selectedWord = $wordleData[rand(0, count($wordleData)-1)];

// Do processing of the data

$output = [
    "request" => $selectedWord
];



header("Content-Type: application/json");
echo json_encode($output, JSON_PRETTY_PRINT);
?>