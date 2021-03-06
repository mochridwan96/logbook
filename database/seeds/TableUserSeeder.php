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
                'username' => 'admin',
                'password' => bcrypt('admin123'),
                'type' => 'admin'
            ],
            [
                'name' => 'Manager',
                'username' => 'manager',
                'password' => bcrypt('manager123'),
                'type' => 'manager'
            ],
            [
                'name' => 'Employee',
                'username' => 'user',
                'password' => bcrypt('user1234'),
                'type' => 'employee'
            ]
        ];
        foreach($users as $item) {

            User::create($item);
        }

        $categories = [
            ['id' => 1, 'name' => 'Suplier' ],
            ['id' => 2, 'name' => 'Foodline'],
            ['id' => 3, 'name' => 'Hardline'],
            ['id' => 4, 'name' => 'Softline'],
        ];

        $data = \App\Category::insert(
            $categories
        );
    }
}
