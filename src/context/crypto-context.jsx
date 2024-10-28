import { createContext, useContext, useEffect, useState } from 'react'
import {
	ageAssets,
	categoryAssets,
	fakeFetchExemple,
	fetchAssets,
	genderAssets,
} from '../api'

const CryptoContext = createContext({
	gender: [],
	assets: [],
	bals: [],
	loading: false,
})

export function CryptoContextProvider({ children }) {
	const [loading, setLoading] = useState(false)
	const [balls, setBals] = useState([])
	const [assets, setAssets] = useState([])
	const [gender, setGender] = useState([])
	const [ages, setAges] = useState([])
	const [category, setСategory] = useState([])

	useEffect(() => {
		async function preload() {
			setLoading(true)
			const { result } = await fakeFetchExemple()
			const assets = await fetchAssets()
			const gender = await genderAssets()
			const ages = await ageAssets()
			const category = await categoryAssets()

			//setAges(ages)
			setAges(ages)
			setСategory(category)

			setGender(gender)
			setAssets(
				assets.map(asset => {
					//const rez = result.find((b) => b.id === asset.id)
					return {
						satisfactory: asset.bals > 20,
						...asset,
					}
				})
			)
			setBals(result)
			setLoading(false)
		}
		preload()
	}, [])
	return (
		<CryptoContext.Provider
			value={{ loading, balls, assets, gender, ages, category }}
		>
			{children}
		</CryptoContext.Provider>
	)
}
export default CryptoContext

export function useCrypto() {
	return useContext(CryptoContext)
}
