import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public datosPersonales: any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.oBanner();
  }

  oBanner(){
    this.datosPortfolio.obtenerDatosPersona().subscribe((data)=> {
      this.datosPersonales = data
    })
  }
}
