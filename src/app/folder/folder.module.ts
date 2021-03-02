import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { RouterModule } from '@angular/router';
import { FileSizeFormatPipe } from './file-size-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: FolderPage
      }
    ])
  ],
  declarations: [FolderPage, FileSizeFormatPipe]
})
export class FolderPageModule {}
