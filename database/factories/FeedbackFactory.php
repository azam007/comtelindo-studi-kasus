<?php

use Faker\Generator as Faker;


$factory->define(App\Models\Feedback::class, function (Faker $faker) {
    return [
        'email' => $faker->freeEmail,
        'fullname' => $faker->name,
        'subject' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'message' => $faker->paragraphs($nb = 3, $asText = true),
        'status' => $faker->randomElement($array = array (0,1))
    ];
});
