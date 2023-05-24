import {Component, OnInit, ChangeDetectorRef, ViewEncapsulation, NgModule} from '@angular/core';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {tap, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./../../../../../../app/app.component.css']
})
export class IndexComponent implements OnInit {

   vendidohoje: String = "";
  percenthoje: String = "";
  vendashoje: String = "";
  percentvendashoje: String = "";
  novosclientes: String = "";
  novosclientespercent: String = "";
  ticketmedio: String = "";
  ticketmediopercent: String = "";

  htmlvendas: SafeHtml = "";

  vendedor_id: String = "";

  tem0:boolean= false;
  tem1:boolean= false;
  tem2:boolean= false;
  tem3:boolean= false;
  tem4:boolean= false;
  tem5:boolean= false;
  cont: number = 0;
   cont1: number = 0;
   cont2: number = 0;


  successMessage: string = "";
  errorMessage: string = "";
  token: any;

  mostranotify: boolean;
  mostralist: boolean = false;
  mostramenu: boolean = false;
  notfycunt: String = "";
  Notification: Notification[]= [];
  mostraprodutos: boolean = false;
  status: any;
  quantidadeVendas: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
