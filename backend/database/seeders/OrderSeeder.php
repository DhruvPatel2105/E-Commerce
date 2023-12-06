<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;
use App\Models\OrderItem;


class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Order::factory(30)->create()
            ->each(fn(Order $order) => OrderItem::factory(random_int(1, 5))
                ->create(['order_id' => $order->id]));
    }
}
