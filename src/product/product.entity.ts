import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Producto')
export class Product {
  @PrimaryGeneratedColumn({ name: 'ID_Producto' })
  id: number;

  @Column({ name: 'Nombre_Producto', length: 100 })
  name: string;

  @Column({ name: 'Descripcion_Producto', type: 'text' })
  description: string;

  @Column({ name: 'Precio', type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
