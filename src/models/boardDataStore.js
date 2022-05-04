import wordBank from '../wordle-bank.txt'

export const initialBoardState = [
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', ''],
  ['', '', '', '', '', '']
]

export const keyRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
export const keyRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
export const keyRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

export const alphabet = [
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M'
]

export const generateWordSet = async () => {
  let wordSet
  let todaysWord
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split('\n')
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
      wordSet = new Set(wordArr)
    })

  return { wordSet, todaysWord }
}
