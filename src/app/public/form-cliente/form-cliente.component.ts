import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';
import { Patterns } from 'src/app/utils/global';
import { NbToastrService, NbToastRef } from '@nebular/theme';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {

  model: any;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private dashService: DashboardService, private toasterService: NbToastrService) { }

  ngOnInit(): void {
    this.initializeClientForm();
  }

  private initializeClientForm() {
    this.form = this.formBuilder.group({
      name: [{ value: '', disabled: false }, [Validators.required]],
      last_name: [{ value: '', disabled: false }, [Validators.required]],
      age: [{ value: 18, disabled: false }, [Validators.required]],
      birthday: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  save() {

    this.model = {
      name: this.form.get('name').value,
      last_name: this.form.get('last_name').value,
      age: this.form.get('age').value,
      birthday: this.form.get('birthday').value,
    };

    this.dashService.saveClient(this.model)
      .subscribe((data) => {
        const toastRef: NbToastRef = this.toasterService.success("Se agrego el cliente!", "Agregado!");

        setTimeout(() => {
          toastRef.close();
          this.route.navigate(['/clients']);
        }, 5000);

      });
  }

}
