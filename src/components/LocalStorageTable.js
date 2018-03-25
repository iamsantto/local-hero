import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const LocalStorageTable = props => {
	const { storageData, editable } = props
	let tableValues = []

	if (props.storageData)
		Object.keys(storageData).forEach((key, index) => {
			tableValues.push(
				<tr key={index}>
					<td>{key}</td>
					<td>{storageData[key]}</td>
					<td className={css(styles[`editable_${editable}`])}>delete</td>
				</tr>
			)
		})

	return (
		<div className={css(styles.main)}>
			<table>
				<thead>
					<tr>
						<th>Key</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{tableValues}
				</tbody>
			</table>
		</div>
	)
}

const styles = StyleSheet.create({
	main: {
		width: '300px',
		height: '200px'
	},
	editable_true: {
		color: 'red'
	},
	editable_false: {
		color: 'green'
	}
})

export default LocalStorageTable
