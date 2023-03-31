import { Document, Text, Page, View, StyleSheet, PDFViewer, Font, Image } from '@react-pdf/renderer';
import logo from '../../../img/logo.png';
const font = Font.register({ family: 'Times-Roman', fontStyle: 'normal', fontWeight: 'heavy' });

const style = StyleSheet.create({
    // page:{margin:'100px'},
    planiTitle: { fontFamily: 'Times-Roman', textAlign: 'center', backgroundColor: 'rgb(168, 208, 141)', borderBottomStyle: 'solid', border: '1px' },
    center: { display: 'flex', alignContent: 'center' },
    tableRow: { flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly' },
    tableStyle: { width: '50%', borderLeft: '1px', borderBottom: '1px', paddingLeft: '3px', fontFamily: 'Times-Roman' },
    tableContent: { borderBottom: '1px', },
    tableItems: { fontSize: '13px', padding: '2px', fontFamily: 'Times-Roman', width: '50%', borderLeft: '1px', borderBottom: '1px', paddingLeft: '3px', backgroundColor: 'rgb(168, 208, 141)', textAlign: 'center' },
    titleStyle: { padding: '3px', fontFamily: 'Times-Roman', fontSize: '11px', fontWeight: 'bold' },
    documentFormat: { paddingBottom: '10px', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', border: '1px' },
    borderPage: { border: '1px' },
    logo: { width: '50px', height: '50px', paddingLeft: '3px' }
})



export const PDFDocument = () => {
    return (
        <div className='d-flex justify-content-center'>
            <PDFViewer width='80%' height='500px'>
                <Document style={style.page} pageMode='fullScreen' >
                    <Page style={[style.page, style.documentFormat]} orientation='landscape'>
                        <Image src={logo} style={style.logo} />
                        <View style={style.borderPage}>
                            <View>
                                <Text style={style.planiTitle}>Planificación Mensual 2023</Text>
                            </View>
                            <View style={style.tableRow}>
                                <Text style={[style.tableStyle, style.titleStyle]}>CURSO:</Text>
                                <Text style={[style.tableStyle, style.titleStyle]}>ASIGNATURA: Educación Física</Text>
                                <Text style={[style.tableStyle, style.titleStyle]}>PROFESOR:</Text>
                            </View>
                            <View style={style.tableRow}>
                                <Text style={[style.tableStyle, style.titleStyle]}>UNIDAD:</Text>
                                <Text style={[style.tableStyle, style.titleStyle]}>TIEMPO DE DURACIÓN:</Text>
                            </View>
                            <View style={style.tableContent}>
                                <Text style={style.titleStyle}>OBJETIVOS BASALES:</Text>
                            </View>
                            <View style={style.tableContent}>
                                <Text style={style.titleStyle}>OBJETIVOS COMPLEMENTARIOS: </Text>
                            </View>
                            <View style={style.tableContent}>
                                <Text style={style.titleStyle}>OBJETIVO TRANSVERSAL: </Text>
                            </View>
                            <View style={style.tableRow}>
                                <Text style={style.tableItems}>OBJETIVOS DE CLASES</Text>
                                <Text style={style.tableItems}>CONTENIDOS</Text>
                                <Text style={style.tableItems}>HABILIDADES DE LA ASIGNATURA</Text>
                                <Text style={style.tableItems}>ACTIVIDADES</Text>
                                <Text style={style.tableItems}>INDICADORES DE LOGRO</Text>
                                <Text style={style.tableItems}>EVALUACIONES</Text>
                                <Text style={style.tableItems}>RECURSOS</Text>
                            </View>
                            <View style={style.tableRow}>
                                <Text style={style.tableStyle}>holoholoholoholoholoholoholovs</Text>
                                <Text style={style.tableStyle}>holo</Text>
                                <Text style={style.tableStyle}>holo</Text>
                                <Text style={style.tableStyle}>holo</Text>
                                <Text style={style.tableStyle}>holo</Text>
                                <Text style={style.tableStyle}>holo</Text>
                                <Text style={style.tableStyle}>holo</Text>

                            </View>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </div>

    )
}
