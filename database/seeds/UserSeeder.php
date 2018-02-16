<?php

use Illuminate\Database\Seeder;
use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'api_token' => 'Rjsp2vaOdrUGhuEbtl9W2iBVpFHXpVTNnrBiWAkRCeUs5briKRV2Z8t5hZWYtKY9rVgkm8z15mg4ul2vwUHHzTsfpOG9fPxHeDTV'
        ]);
    }
}
