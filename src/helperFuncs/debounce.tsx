import react from 'react'


const debounce = (func: Function, wait: number) => {
  let timeout: number | undefined ;

  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = window.setTimeout(later, wait)
  }
}

export default debounce