import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    AppCommonModule
  ],
  declarations: [DashboardComponent, SkillsComponent, EducationComponent, ExperienceComponent, ContactComponent]
})
export class UserModuleModule { }
