<?php
// # Recupero il file contenente i dati
$dischi = file_get_contents("../data/dischi.json");
// var_dump($dischi);

// # Dico al browser di analizzarlo come file json
header("Content-Type: application/json");

// # mostro i contenuti
echo $dischi;
?>