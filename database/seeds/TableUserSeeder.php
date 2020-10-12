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
                'username' => '12345',
                'password' => bcrypt('admin123'),
                'type' => 'admin'
            ],
            [
                'name' => 'Manager',
                'username' => '6789',
                'password' => bcrypt('manager123'),
                'type' => 'manager'
            ],
            [
                'name' => 'Employee',
                'username' => '101112',
                'password' => bcrypt('employee123'),
                'type' => 'employee'
            ]
        ];
        foreach($users as $item) {

            User::create($item);
        }
    }
}
