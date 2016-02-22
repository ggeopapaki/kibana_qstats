define(function (require) {
 
 // we also need to load the controller and used by the template
 require('plugins/kibana_qstats/qstats_vis_controller');
 
 return function (Private) {
   var TemplateVisType = Private(require('plugins/vis_types/template/template_vis_type'));
   var Schemas = Private(require('plugins/vis_types/_schemas'));
 
   // return the visType object, which kibana will use to display and configure new
   // Vis object of this type.
   return new TemplateVisType({
     name: 'kibana_qstats',
     title: 'Kibana QStats',
     description: 'Telephone stats',
     icon: 'fa-car',
     template: require('text!plugins/kibana_qstats/qstats.html'),
     params: {
       defaults: {
         fontSize: 60,
         width: 50
       },
       editor: require('text!plugins/kibana_qstats/qstats_vis_params.html')
     },
     schemas: new Schemas([
       {
         group: 'metrics',
         name: 'metric',
         title: 'Metric',
         min: 1,
         defaults: [
           { type: 'count', schema: 'metric' }
         ]
       }
     ])
   });
 };
});