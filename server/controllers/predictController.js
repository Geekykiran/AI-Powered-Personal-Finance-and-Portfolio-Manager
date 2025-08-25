export const predictSavings = (req, res) => {
    try {
        const predicted = 12000
        res.json({ predicted, confidence: 'High' })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Prediction failed', error: err.message })
    }
}