<?php

use Illuminate\Database\Seeder;
use App\User;

class TableUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('admin123'),
                'type' => 'admin'
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@gmail.com',
                'password' => bcrypt('manager123'),
                'type' => 'manager'
            ],
            [
                'name' => 'Employee',
                'email' => 'employee@gmail.com',
                'password' => bcrypt('employee123'),
                'type' => 'employee'
            ]
        ];
        foreach($users as $item) {

            User::create($item);        
        }
    }
}
