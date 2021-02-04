import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CalculationResult(props) {
	const {
		capital,
		interest,
		months,
		total,
		errorMessage
	} = props

	return (
		<View style={styles.content}>
			{
				total &&
				<View style={styles.boxResult}>
					<Text style={styles.title}>RESUMEN</Text>
					<DataResult title="Cantidad solicitada" value={`$ ${capital}`} />
					<DataResult title="Interes" value={`${interest} %`} />
					<DataResult title="Plazos" value={`${months} meses`} />
					<DataResult title="Pago mensual" value={`$ ${total.monthlyFee}`} />
					<DataResult title="Total a pagar" value={`$ ${total.totalPayable}`} />
				</View>
			}
			<View >
				<Text style={styles.error}> {errorMessage}</Text>
			</View>
		</View>
	)
}

const DataResult = ({ title, value }) => (
	<View style={styles.value}>
		<Text>{title}: </Text>
		<Text>{value} </Text>
	</View>
)

const styles = StyleSheet.create({
	content: {
		marginTop: 10,
		marginHorizontal: 40,
	},
	boxResult: {
		padding: 30,
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 30,
	},
	value: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
	error: {
		textAlign: 'center',
		color: '#f00',
		fontWeight: 'bold',
		fontSize: 20
	}
})
