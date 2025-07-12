ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-74.841991, -19.099657, -70.074159, -14.607015]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_CORTADO_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CORTADO<br />\
    <img src="styles/legend/CORTADO_1_0.png" /> -28<br />\
    <img src="styles/legend/CORTADO_1_1.png" /> 6391<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CORTADO_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8357202.752145, -1957606.822907, -7878907.522039, -1644860.545496]
        })
    });
var lyr_PENDIENTE_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PENDIENTE<br />\
    <img src="styles/legend/PENDIENTE_2_0.png" /> <= 15.0000<br />\
    <img src="styles/legend/PENDIENTE_2_1.png" /> 15.0000 - 30.0000<br />\
    <img src="styles/legend/PENDIENTE_2_2.png" /> 30.0000 - 45.0000<br />\
    <img src="styles/legend/PENDIENTE_2_3.png" /> 45.0000 - 60.0000<br />\
    <img src="styles/legend/PENDIENTE_2_4.png" /> > 60.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PENDIENTE_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8357202.752145, -1957606.822907, -7878907.522039, -1644860.545496]
        })
    });
var lyr_MAPADESOMBRAS_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MAPA DE SOMBRAS<br />\
    <img src="styles/legend/MAPADESOMBRAS_3_0.png" /> 1<br />\
    <img src="styles/legend/MAPADESOMBRAS_3_1.png" /> 255<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MAPADESOMBRAS_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-8357202.752145, -1957606.822907, -7878907.522039, -1644860.545496]
        })
    });
var format_arequipa_iiee_4 = new ol.format.GeoJSON();
var features_arequipa_iiee_4 = format_arequipa_iiee_4.readFeatures(json_arequipa_iiee_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_arequipa_iiee_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arequipa_iiee_4.addFeatures(features_arequipa_iiee_4);
var lyr_arequipa_iiee_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arequipa_iiee_4, 
                style: style_arequipa_iiee_4,
                popuplayertitle: 'arequipa_iiee',
                interactive: true,
                title: '<img src="styles/legend/arequipa_iiee_4.png" /> arequipa_iiee'
            });
var format_Rios_Quebradas_5 = new ol.format.GeoJSON();
var features_Rios_Quebradas_5 = format_Rios_Quebradas_5.readFeatures(json_Rios_Quebradas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rios_Quebradas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_Quebradas_5.addFeatures(features_Rios_Quebradas_5);
var lyr_Rios_Quebradas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_Quebradas_5, 
                style: style_Rios_Quebradas_5,
                popuplayertitle: 'Rios_Quebradas',
                interactive: true,
                title: '<img src="styles/legend/Rios_Quebradas_5.png" /> Rios_Quebradas'
            });
var format_RVD_6 = new ol.format.GeoJSON();
var features_RVD_6 = format_RVD_6.readFeatures(json_RVD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RVD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVD_6.addFeatures(features_RVD_6);
var lyr_RVD_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVD_6, 
                style: style_RVD_6,
                popuplayertitle: 'RVD',
                interactive: true,
                title: '<img src="styles/legend/RVD_6.png" /> RVD'
            });
var format_RVV_7 = new ol.format.GeoJSON();
var features_RVV_7 = format_RVV_7.readFeatures(json_RVV_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RVV_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVV_7.addFeatures(features_RVV_7);
var lyr_RVV_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVV_7, 
                style: style_RVV_7,
                popuplayertitle: 'RVV',
                interactive: true,
                title: '<img src="styles/legend/RVV_7.png" /> RVV'
            });
var format_provincia_8 = new ol.format.GeoJSON();
var features_provincia_8 = format_provincia_8.readFeatures(json_provincia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_provincia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_provincia_8.addFeatures(features_provincia_8);
var lyr_provincia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_provincia_8, 
                style: style_provincia_8,
                popuplayertitle: 'provincia',
                interactive: true,
                title: '<img src="styles/legend/provincia_8.png" /> provincia'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CORTADO_1.setVisible(true);lyr_PENDIENTE_2.setVisible(true);lyr_MAPADESOMBRAS_3.setVisible(true);lyr_arequipa_iiee_4.setVisible(true);lyr_Rios_Quebradas_5.setVisible(true);lyr_RVD_6.setVisible(true);lyr_RVV_7.setVisible(true);lyr_provincia_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CORTADO_1,lyr_PENDIENTE_2,lyr_MAPADESOMBRAS_3,lyr_arequipa_iiee_4,lyr_Rios_Quebradas_5,lyr_RVD_6,lyr_RVV_7,lyr_provincia_8];
lyr_arequipa_iiee_4.set('fieldAliases', {'Código Modular': 'Código Modular', 'Anexo': 'Anexo', 'Nombre de SS.EE.': 'Nombre Centro Educativo:', 'Ubigeo': 'Ubigeo', 'Departamento': 'Departamento', 'Provincia': 'Provincia', 'Distrito': 'Distrito', 'Código DRE/UGEL': 'Código DRE/UGEL', 'DRE / UGEL': 'DRE / UGEL', 'Centro Poblado': 'Centro Poblado', 'Código Centro Poblado': 'Código Centro Poblado', 'Código Local': 'Código Local', 'Dirección': 'Dirección', 'Nivel / Modalidad': 'Nivel / Modalidad', 'Gestion / Dependencia': 'Gestion / Dependencia', 'Altitud': 'Altitud', 'Fuente de coordenadas': 'Fuente de coordenadas', });
lyr_Rios_Quebradas_5.set('fieldAliases', {'fid': 'fid', 'Rasgo_Prin': 'Rasgo_Prin', 'Rasgo_Secu': 'Rasgo_Secu', 'Nombre': 'Nombre Ríos:', 'Longitud': 'Longitud', });
lyr_RVD_6.set('fieldAliases', {'fid': 'fid', 'RODADURA': 'RODADURA', 'COD_DS11': 'Nombre de RVD:', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', 'SENTIDO': 'SENTIDO', 'BASE': 'BASE', 'DATA': 'DATA', 'FECHA_ACTU': 'FECHA_ACTU', 'FUENTE': 'FUENTE', 'COD_RODADU': 'COD_RODADU', 'NOMBDIST': 'NOMBDIST', 'CAPITAL': 'CAPITAL', });
lyr_RVV_7.set('fieldAliases', {'fid': 'fid', 'COD_DS11': 'Nombre de RVV:', 'COD_DS12': 'COD_DS12', 'TRAY_DS12': 'TRAY_DS12', 'TRAY_DS11': 'TRAY_DS11', 'UBIGEO': 'UBIGEO', 'DEP': 'DEP', 'PROV': 'PROV', 'COD_DEP': 'COD_DEP', 'COD_PROV': 'COD_PROV', 'LONG_KM': 'LONG_KM', 'OBS': 'OBS', });
lyr_provincia_8.set('fieldAliases', {'fid': 'fid', 'COUNT': 'COUNT', 'FIRST_IDPR': 'Código:', 'NOMBPROV': 'Nombre de provincia:', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_DCTO': 'LAST_DCTO', 'LAST_LEY': 'LAST_LEY', 'FIRST_FECH': 'FIRST_FECH', 'LAST_FECHA': 'LAST_FECHA', 'MIN_SHAPE_': 'MIN_SHAPE_', 'ha': 'ha', 'Fotos': 'FOTOS:', 'INEI': 'INEI', 'Gob Region': 'GOBIERNO REGIONAL:', });
lyr_arequipa_iiee_4.set('fieldImages', {'Código Modular': 'Hidden', 'Anexo': 'Hidden', 'Nombre de SS.EE.': 'ExternalResource', 'Ubigeo': 'Hidden', 'Departamento': 'Hidden', 'Provincia': 'Hidden', 'Distrito': 'Hidden', 'Código DRE/UGEL': 'Hidden', 'DRE / UGEL': 'Hidden', 'Centro Poblado': 'Hidden', 'Código Centro Poblado': 'Hidden', 'Código Local': 'Hidden', 'Dirección': 'Hidden', 'Nivel / Modalidad': 'Hidden', 'Gestion / Dependencia': 'Hidden', 'Altitud': 'Hidden', 'Fuente de coordenadas': 'Hidden', });
lyr_Rios_Quebradas_5.set('fieldImages', {'fid': 'Hidden', 'Rasgo_Prin': 'Hidden', 'Rasgo_Secu': 'Hidden', 'Nombre': 'ExternalResource', 'Longitud': 'Hidden', });
lyr_RVD_6.set('fieldImages', {'fid': 'Hidden', 'RODADURA': 'Hidden', 'COD_DS11': 'ExternalResource', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'Hidden', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', 'SENTIDO': 'Hidden', 'BASE': 'Hidden', 'DATA': 'Hidden', 'FECHA_ACTU': 'Hidden', 'FUENTE': 'Hidden', 'COD_RODADU': 'Hidden', 'NOMBDIST': 'Hidden', 'CAPITAL': 'Hidden', });
lyr_RVV_7.set('fieldImages', {'fid': 'Hidden', 'COD_DS11': 'ExternalResource', 'COD_DS12': 'Hidden', 'TRAY_DS12': 'Hidden', 'TRAY_DS11': 'Hidden', 'UBIGEO': 'Hidden', 'DEP': 'Hidden', 'PROV': 'Hidden', 'COD_DEP': 'Hidden', 'COD_PROV': 'Hidden', 'LONG_KM': 'Hidden', 'OBS': 'Hidden', });
lyr_provincia_8.set('fieldImages', {'fid': 'Hidden', 'COUNT': 'Hidden', 'FIRST_IDPR': 'ExternalResource', 'NOMBPROV': 'ExternalResource', 'FIRST_NOMB': 'Hidden', 'LAST_DCTO': 'Hidden', 'LAST_LEY': 'Hidden', 'FIRST_FECH': 'Hidden', 'LAST_FECHA': 'Hidden', 'MIN_SHAPE_': 'Hidden', 'ha': 'Hidden', 'Fotos': 'ExternalResource', 'INEI': 'ExternalResource', 'Gob Region': 'ExternalResource', });
lyr_arequipa_iiee_4.set('fieldLabels', {'Nombre de SS.EE.': 'no label', });
lyr_Rios_Quebradas_5.set('fieldLabels', {'Nombre': 'no label', });
lyr_RVD_6.set('fieldLabels', {'COD_DS11': 'no label', });
lyr_RVV_7.set('fieldLabels', {'COD_DS11': 'no label', });
lyr_provincia_8.set('fieldLabels', {'FIRST_IDPR': 'header label - always visible', 'NOMBPROV': 'header label - always visible', 'Fotos': 'header label - always visible', 'INEI': 'header label - always visible', 'Gob Region': 'header label - always visible', });
lyr_provincia_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});