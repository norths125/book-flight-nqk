import { Flight } from '../flight/fight';

export class Mockflight {
  public static mockFlight: Flight[] = [
    {
      fullName: "Kunthip Suktawee",
      from: "Thailand",
      to: "Korea",
      type: "One way",
      departure: new Date('03-05-2565'),
      arrival: new Date('03-05-2565'),
      adults: 2,
      children: 2,
      infants: 1
    }
  ]

}
