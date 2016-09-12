import angular from 'angular';
import demodep1 from 'demo-dep1';

angular.module('demoapp1', ['demodep1'])
	.component('app', {
		template: '<hello-world></hello-world>'
	});
