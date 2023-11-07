import { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { DIANASOUR, FIRE, CLOUDS, GROUNDS } from './constants'
import { Section } from '../../Section.jsx'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import {
  gamePauseAtom,
  gameIsShootingAtom,
  gameIsStartedAtom,
  gameReadOnlyStateAtom,
  gameScoreAtom,
  gameTimeAtom,
  gameDianasourLifeAtom,
  gamePlayerLifeAtom,
  gameIsHit
} from '../../../../../atoms/game'
import { Audios } from './Sections/Audios.jsx'
import { Rewards } from './Sections/Rewards.jsx'
import { Controls } from './Sections/Controls.jsx'
import { TopTexts } from './Sections/TopTexts.jsx'

export const GameSection = () => {
  const jumpAudioRef = useRef(null)
  const hitAudioRef = useRef(null)
  const victoryAudioRef = useRef(null)
  const gameTimerRef = useRef(null)
  const dianaFireRef = useRef(null)
  const cloudControls = useAnimation()
  const groundControls = useAnimation()
  const dianasourControls = useAnimation()
  const fireControls = useAnimation()
  const [dianasourLife, setDianasourLife] = useAtom(gameDianasourLifeAtom)
  const setPlayerLifeAtom = useSetAtom(gamePlayerLifeAtom)
  const [isHit, setIsHit] = useAtom(gameIsHit)

  const gameState = useAtomValue(gameReadOnlyStateAtom)
  const setIsStarted = useSetAtom(gameIsStartedAtom)
  const setIsPaused = useSetAtom(gamePauseAtom)
  const setScore = useSetAtom(gameScoreAtom)
  const setTime = useSetAtom(gameTimeAtom)
  const setIsShooting = useSetAtom(gameIsShootingAtom)

  /**
   * Start the game animations
   */
  useEffect(() => {
    if (!gameState.isStarted) return

    cloudControls.start(() => ({
      x: '-100vw',
      transition: { duration: 13, repeat: Infinity, ease: 'linear' }
    }))

    cloudControls.start(() => ({
      x: '-100vw',
      transition: { duration: 9, repeat: Infinity, ease: 'linear' }
    }))
    groundControls.start(() => ({
      x: '-100vw',
      transition: { duration: 9, repeat: Infinity, ease: 'linear' }
    }))

    dianasourControls.start(() => ({
      x: ['0vw', '-10vw', '0vw'],
      scaleX: [-1, -1, -1],
      transition: { duration: 3, repeat: Infinity, ease: 'linear' }
    }))

    // move file from dainasour mouth to left
    fireControls.start(() => ({
      x: ['-12vw', '-70vw'],
      rotate: [90, 90, 90],
      transition: { duration: 3, repeat: Infinity, ease: 'linear' }
    }))
  }, [gameState.isStarted])

  useEffect(() => {
    if (gameState.isStarted || gameTimerRef.current) {
      clearInterval(gameTimerRef.current)
    }

    /**
     * Start the game tick
     */
    gameTimerRef.current = setInterval(() => {
      if (gameState.isPaused || !gameState.isStarted) return

      let prevScore = 0
      let newScore = 0
      setTime(time => time + 0.1)
      setScore(score => {
        prevScore = score
        newScore = score + 0.2
        return newScore
      })
      const successAudioRef = document.getElementById('successAudioRef')
      if (
        Math.ceil(newScore / 100) * 100 > Math.ceil(prevScore / 100) * 100 &&
        successAudioRef &&
        prevScore
      ) {
        successAudioRef.play()
      }

      /**
       * Check if the game is arrived to the prize
       */
      if (prevScore > 50 && prevScore % 100 < 1 && prevScore < 502) {
        handleTogglePauseTheGame()
      }

      /**
       * Check if the game is ended
       */
      if (prevScore >= 700) {
        clearInterval(gameTimerRef.current)
      }
    }, 1000)
  }, [gameState.isStarted, gameState.isPaused, setScore, setTime])

  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === ' ') {
        e.preventDefault()
        if (gameState.isPaused) {
          handleTogglePauseTheGame()
        } else if (!gameState.isStarted) {
          setIsStarted(true)
        } else {
          jumpAudioRef.current.currentTime = 0
          jumpAudioRef.current.play()
          setIsShooting(true)
          setTimeout(() => {
            setIsShooting(false)
          }, 900)
        }
      } else if (e.key === 'Escape') {
        handleTogglePauseTheGame()
      }
    }

    window.removeEventListener('keydown', handleKeyPress)
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [gameState.isStarted, setIsStarted, setIsShooting, gameState.isPaused])

  const handleTogglePauseTheGame = () => {
    if (gameState.isPaused) {
      setIsPaused(false)
      setScore(score => score + 1)
    } else {
      setIsPaused(true)
      clearInterval(gameTimerRef.current)
    }
  }

  useEffect(() => {
    if (gameState.score >= 700 && gameState.isStarted) {
      victoryAudioRef.current.play()
      setIsStarted(false)
      setScore(0)
      setTime(0)
      clearInterval(gameTimerRef.current)
    }
  }, [gameState.score, gameState.isStarted])

  const showingReward = gameState.isPaused && gameState.score % 100 < 2 && gameState.score < 502

  return (
    <Section
      className={showingReward ? 'border-t-8 border-b-8 border-gray-300' : ''}
      style={{
        background: showingReward
          ? 'repeating-conic-gradient(hsl(0deg 0% 100% / 79%) 0deg 15deg, hsla(0,0%,100%,0) 0deg 30deg) #faff0059'
          : ''
      }}>
      <div className="relative w-full h-3/4">
        <TopTexts showingReward={showingReward} />

        <motion.div
          animate={dianasourControls}
          className="absolute -bottom-8 right-16 -scale-x-100 w-64 h-64">
          <img src={DIANASOUR} alt="dianasour" />
          <div className="h-4 ml-16 relative w-32 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute"></div>
            <div
              className={`h-full ${dianasourLife < 50 ? 'bg-red-500' : 'bg-primary'} absolute`}
              style={{ width: `${dianasourLife}%` }}></div>
          </div>
        </motion.div>

        <motion.img
          src={FIRE}
          animate={fireControls}
          ref={dianaFireRef}
          alt="dianasour"
          onUpdate={e => {
            if (
              parseInt(e.x + '') < -66 &&
              !isHit &&
              gameState.isStarted &&
              !gameState.isPaused &&
              !gameState.isShooting
            ) {
              setIsHit(true)
              hitAudioRef.current.currentTime = 0
              hitAudioRef.current.play()
              setPlayerLifeAtom(life => life - 1)
              setTimeout(() => {
                setIsHit(false)
              }, 200)
            }
          }}
          className={`absolute bottom-32 right-32 rotate-90 w-24 h-24 ${
            gameState.isStarted && !gameState.isPaused ? 'visible' : 'invisible'
          }`}
        />

        {CLOUDS.map((cloud, index) => (
          <div key={index} style={{ position: 'absolute', top: cloud.y, left: cloud.x }}>
            <motion.img
              alt="cloud"
              id={cloud.id}
              animate={cloudControls}
              custom={index}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAcAgMAAACR2TCnAAAABlBMVEUAAADa2to4qB92AAAAAXRSTlMAQObYZgAAAFFJREFUeF6VzTEKAFEIxNA03m+a3P8q2wqi/E35BIdeGXq3q5hnrwBs7mC5vIZzu/nnqI319vRtqHB731blwSHjx+22+Rdn94rzQq0ugKPVlz5onyJcGdu0NgAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
        {GROUNDS.map((ground, index) => (
          <motion.img
            key={index}
            alt="ground"
            id={ground.id}
            animate={groundControls}
            custom={index}
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: ground.x,
              width: '100%'
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACWAAAAAYAQMAAABEalRSAAAABlBMVEX///9TU1NYzE1OAAAAAXRSTlMAQObYZgAAAOtJREFUeF7tljEKwzAMRb/J0CWgI/QKOYAh1+pUcjQfpUfw2MFEHVyDQSQmQUNM9AYNcobnh4egU+YVqhAvZSpgsfolPnSv5d0nz3vHslgUdK81RLzyvHcsi+WBNxQh4Ln8pw4Wi7skAg9mXgHMrEACXJnbHIllsbqGAtwXhnYswzFzwPWxWEPc2CexoobkHM4ZpD6s2loWiyIEEwCChIomMiMEHqgP573C9eHkc5VLWh3XsljnGVoLWVl+31bp38piTVVuihtPOAm9kcRLbrFjEvqwamtZLK5eI8sSan9rXEK0LcNFrY5oWawf59S7YSRD7eMAAAAASUVORK5CYII="
          />
        ))}

        <Controls />
        <Rewards showingReward={showingReward} />
      </div>

      <Audios
        hitAudioRef={hitAudioRef}
        jumpAudioRef={jumpAudioRef}
        victoryAudioRef={victoryAudioRef}
      />
    </Section>
  )
}
