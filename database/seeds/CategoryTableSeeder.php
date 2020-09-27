<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
