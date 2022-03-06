import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Flight } from './fight';
import { PageService } from 'src/app/share/page.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flightData !: Flight[]
  flightform !: FormGroup;
  startDate = new Date(Date.now())

  constructor(private fb:FormBuilder,private page:PageService  ) { 

     this.flightform = this.fb.group({
      fullName: ['', Validators.required],
      from: [null, Validators.required],
      to: [null, Validators.required],
      type: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      adults: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]],
      children: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]],
      infants: [0, [Validators.required, Validators.max(10), Validators.pattern('[0-9]*$')]]


    })
  }

  ngOnInit(): void {
    this.getPages()
  }

  getPages(){
    this.flightData = this.page.getPages()
  }

  onSubmit(f:Flight): void{
    if(f.from == "null") return alert('กรุณาเลือกจุดหมาย!')
    else if(f.to == "null") return alert('กรุณาเลือกปลายทาง!')
    else if(f.from == f.to) return alert('จุดเริ่มต้นและจุดปลายทางต้องไม่เหมือนกัน!')
    const yearDeparture = f.departure.getFullYear() + 543
    const yearArrival = f.arrival.getFullYear() + 543
    f.departure = new Date((f.departure.getMonth() + 1) + '/' + f.departure.getDate() + "/" + yearDeparture)
    f.arrival = new Date((f.arrival.getMonth() + 1) + '/' + f.arrival.getDate() + "/" + yearArrival)
    this.page.addFlight(f)
    console.log(f)

  }


}
