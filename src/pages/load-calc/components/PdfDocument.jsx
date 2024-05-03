import React from 'react'
import { Page, Document, Text, View, StyleSheet } from '@react-pdf/renderer'
import { useData } from '../DataContext'

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    backgroundColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  appliance: {
    width: '30%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    borderLeftColor: borderColor,
    borderLeftWidth: 1,
  },
  quantity: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  watts: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  hours: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
  wattHours: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 8,
  },
})

const PdfDocument = () => {
  const { applianceGroups } = useData()

  const applianceList = () => {
    return Object.entries(applianceGroups)
      .map(([groupName, appliances]) => {
        return appliances.filter(({ quantity }) => quantity > 0)
      })
      .flat()
  }

  const appliances = applianceList()

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.appliance}>Appliance</Text>
          <Text style={styles.quantity}>Qty</Text>
          <Text style={styles.watts}>Watts</Text>
          <Text style={styles.hours}>Hours</Text>
          <Text style={styles.wattHours}>Watt Hours</Text>
        </View>

        {appliances.map((appliance, index) => (
          <View style={styles.row} key={`appliance-${index}`}>
            <Text style={styles.appliance}>{appliance.name}</Text>
            <Text style={styles.quantity}>{appliance.quantity}</Text>
            <Text style={styles.watts}>{appliance.watts}</Text>
            <Text style={styles.hours}>{appliance.hours}</Text>
            <Text style={styles.wattHours}>{appliance.total}</Text>
          </View>
        ))}
      </Page>
    </Document>
  )
}

export default PdfDocument
