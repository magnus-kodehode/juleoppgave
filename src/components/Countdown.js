import { useEffect, useState } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date('Dec 24, 2023 00:00:00').getTime()

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Update the state with the new time left
      setTimeLeft(`${days} Dager ${hours} Timer ${minutes} Minutter ${seconds} Sekunder`)

      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft('God Jul!')
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
        <h2 className='Nav--top--h2'>Det er</h2>
        <h1>{timeLeft}</h1>
        <h2>igjen til jul!</h2>
        </div>
  );
}


export default Countdown