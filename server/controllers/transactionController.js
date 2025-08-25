import Transaction from '../models/Transaction.js'

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.user._id }).sort({ date: -1 })
    res.json(transactions)
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch transactions' })
  }
}

export const addTransation = async (req, res) => {
  const { type, amount, category, note, date } = req.body
  try {
    const transation = new Transaction({
      userId: req.user._id,
      type,
      amount,
      category,
      note,
      date
    })
    const saved = await transation.save()
    res.status(201).json(saved)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add transaction' })
  }
}

export const deleteTransaction = async (req, res) => {
  try {
    const tx = await Transaction.findOneAndDelete({
      _id: req.params._id,
      userId: req.user._id
    })
    if (!tx) return res.status(404).json({ message: 'Transaction not found' })
    res.json({ message: 'Transaction deleted' })
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete Transaction' })
  }
}