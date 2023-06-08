import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class BoilerParts extends Model {
  @Column
  boiler_manufacturer: string;

  @Column({ defaultValue: 0 })
  price: number;

  @Column
  parts_manufacturer: string;

  @Column
  vendor_code: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  images: string; // через sequelize не получается установить массив данных в mysql бд, поэтому будет JSON.stringify([...])

  @Column({ defaultValue: 0 })
  in_stock: number;

  @Column({ defaultValue: false })
  bestseller: boolean;

  @Column({ defaultValue: false })
  new: boolean;

  @Column
  popularity: number;

  @Column
  compatibility: string;
}
