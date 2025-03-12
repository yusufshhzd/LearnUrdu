import './App.css'
import {ContainedButton} from './components/ContainedButton'
import {OutlinedButton} from './components/OutlinedButton'
import React from 'react'
import { Stack } from '@mui/material'


function App() {

  return (

    <div className='App'>

      <div>
       <Stack spacing = {20} direction = 'row' className='button'>
          <Stack spacing = {20} direction = 'column'>
            <ContainedButton text = {"Simple\nPresent"} />
            <ContainedButton text = {"Simple\nPast"} />
            <ContainedButton text = {"Simple\nFuture"} />
          </Stack>

          <Stack spacing = {20} direction = 'column'>
            <ContainedButton text = {"Present\nContinuous"} />
            <ContainedButton text = {"Past\nContinuous"} />
            <ContainedButton text = {"Future\nContinuous"} />
          </Stack>

         <Stack spacing = {20} direction = 'column'>
            <ContainedButton text = {"Present\nPerfect"} />
            <ContainedButton text = {"Past\nPerfect"} />
            <ContainedButton text = {"Future\nPerfect"} />
          </Stack>

          <Stack spacing = {20} direction = 'column'>
            <ContainedButton text = {"Present\nPerfect\nContinuous"} />
            <ContainedButton text = {"Past\nPerfect\nContinuous"} />
            <ContainedButton text = {"Future\nPerfect\nContinuous"} />
          </Stack>
        </Stack>
      </div>

    </div>

  )

}

export default App
