import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-verify-details',
  templateUrl: './verify-details.component.html',
  styleUrls: ['./verify-details.component.scss'],
})
export class VerifyDetailsComponent implements AfterViewInit {

  constructor(private route:Router){}

  ngAfterViewInit(): void {
    this.stepForm();
  }







  public openPendingPage(){
    setTimeout(()=>{
      this.route.navigate(['/dashboard/pending']);
      this.openVerifiedPage()
    },500)

  }

  public openVerifiedPage(){
    setTimeout(()=>{
      this.route.navigate(['/dashboard/verified']);
    },3000)
  }

  public stepForm() {
    $('.btn-next').on('click', () => {
      const currentStepNum: number =
        $('#checkout-progress').data('current-step');
      const nextStepNum: number = currentStepNum + 1;
      const currentStep: any = $('.step.step-' + currentStepNum);
      const nextStep: any = $('.step.step-' + nextStepNum);
      const progressBar: any = $('#checkout-progress');
      $('.btn-prev').removeClass('disabled');
      $('#section' + currentStepNum).toggle();
      $('#section' + nextStepNum).toggle();
      if (nextStepNum == 4) {
        // $(this).toggle();
        $('.btn-next').toggle();
        $('.btn-submit').toggle();
      }

      $('.checkout-progress')
        .removeClass('.step-' + currentStepNum)
        .addClass('.step-' + (currentStepNum + 1));

      currentStep.removeClass('active').addClass('valid');
      currentStep.find('span').addClass('opaque')
      currentStep.find('.fa.fa-check').removeClass('opaque');
      
      nextStep.addClass('active');
      progressBar
        .removeAttr('class')
        .addClass('step-' + nextStepNum)
        .data('current-step', nextStepNum);
    });

    $('.btn-submit').on('click', function () {
      $('.btn-submit').toggle('disabled');
      $('.btn-prev').toggle();
      const currentStepNum: number =
        $('#checkout-progress').data('current-step');
      const currentStep: any = $('.step.step-' + currentStepNum);
      currentStep.removeClass('active').addClass('valid');
      currentStep.find('.fa.fa-check').removeClass('opaque');
    });

    $('.btn-prev').on('click', () => {
      const currentStepNum: number =
        $('#checkout-progress').data('current-step');
      const prevStepNum: number = currentStepNum - 1;
      const currentStep: any = $('.step.step-' + currentStepNum);
      const prevStep: any = $('.step.step-' + prevStepNum);
      const progressBar: any = $('#checkout-progress');
      $('.btn-next').removeClass('disabled');
      $('#section' + currentStepNum).toggle();
      $('#section' + prevStepNum).toggle();
      if (currentStepNum == 4) {
        $('.btn-submit').toggle();
        $('.btn-next').toggle();
      }
      if (currentStepNum == 1) {
        return false;
      }
      if (prevStepNum == 1) {
        $(this).addClass('disabled');
      }
      $('.checkout-progress')
        .removeClass('.step-' + currentStepNum)
        .addClass('.step-' + prevStepNum);

      currentStep.removeClass('active');
      prevStep.find('span').removeClass('opaque');
      prevStep.find('.fa.fa-check').addClass('opaque');

      prevStep.addClass('active').removeClass('valid');
      progressBar
        .removeAttr('class')
        .addClass('step-' + prevStepNum)
        .data('current-step', prevStepNum);
      return true;
    });
  }
}
