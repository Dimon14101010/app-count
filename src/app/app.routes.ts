import {Routes} from "@angular/router";
import {TableComponent} from "./table/table.component";
import {MainPageComponent} from "./main-page/main-page.component";

export const routes: Routes = [
  {path: '' , component: MainPageComponent},
  {path: 'table', component: TableComponent}
  ];
