import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductAddComponent } from "../product/product-add/product-add.component";
import { ProductEditComponent } from "../product/product-edit/product-edit.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Home'}
    },
    {
        path: 'add',
        component: ProductAddComponent,
        data: {title: 'New Product'}
    },
    {
        path: 'edit/:id',
        component: ProductEditComponent,
        data: {title: 'Update Product'}
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}