import { Component } from '@angular/core';
import { Dish } from 'src/app/entities';

type CardDish = Omit<Dish, 'ingredients' | 'cuisines' | 'tags'>;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements CardDish {
  id = '123123123';
  images = ['https://via.placeholder.com/150'];
  name = 'Яичница с беконом';
  description =
    'Описание, если задано, или список продуктов через запятую. При клике на карточку открываем подробное описание блюда. ';
  weight = 192;
  calories = 233;
  price = 150.09;
}
