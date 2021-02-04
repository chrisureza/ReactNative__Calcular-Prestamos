import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, StatusBar } from 'react-native'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import colors from './src/utils/colors'
import CalculationResult from './src/components/CalculationResult'

export default App = () => {
  const [capital, setCapital] = useState()
  const [interest, setInterest] = useState()
  const [months, setMonths] = useState()
  const [total, setTotal] = useState()
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    (capital && interest && months) ?
      claculate()
      :
      reset()
  }, [capital, interest, months])

  const claculate = () => {
    reset()
    if (!capital || !interest || !months) {
      setErrorMessage('Please fill all the fields')
    } else {
      const i = interest / 100
      const fee = i > 0 ? capital / ((1 - Math.pow(i + 1, -months)) / i) : capital / months
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      })
    }
  }

  const reset = () => {
    setErrorMessage(null)
    setTotal(null)
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <CalculationResult
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer reset={reset} />
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center'
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  }
})