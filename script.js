document.addEventListener('DOMContentLoaded', () => {
  let progress = 0

  const el = document.querySelector('.name')
  const setProgress = progress => el.style.width = `${progress}%`

  const tick = () => {
    setProgress(progress)

    if (progress === 100) {
      progress = 0
      setTimeout(tick, 3000)
      return
    }

    const part = Math.floor(Math.random() * 10) + 5
    progress = Math.min(progress + part, 100)
    const timeout = Math.floor(Math.random() * 1000) + 500

    setTimeout(tick, timeout)
  }

  tick()
})
