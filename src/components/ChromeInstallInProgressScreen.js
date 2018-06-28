import React from 'react'
import Divider from 'material-ui/Divider'
import ArrowTopRight from 'mdi-material-ui/ArrowTopRight'
import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Header from 'components/Header'
import { lightestShadingColorNoOpacity, textColor } from 'themes/theme'

class ChromeInstallInProgressScreen extends React.Component {
  render() {
    const steps = [
      {
        label: 'Get the extension',
        completed: true,
      },
      {
        label: 'Sign in',
        completed: false,
      },
      {
        label: 'Open tabs for good!',
        completed: false,
      },
    ]

    return (
      <div
        style={{
          background: lightestShadingColorNoOpacity,
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <Header />
        <div
          style={{
            position: 'absolute',
            top: 270,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              margin: '0px 10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                alignItems: 'baseline',
              }}
            >
              <h1 style={{ fontSize: 22 }}>
                Click <span>"Add extension"</span>
              </h1>
              <ArrowTopRight
                style={{ width: 30, height: 30, color: textColor }}
              />
            </div>
            <p>
              We use the extension to make your new tab charitable and
              beautiful.
            </p>
          </div>
          <div
            style={{
              width: '100%',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Divider style={{ width: '90%', marginBottom: 20 }} />
            <div
              style={{
                width: '90%',
                maxWidth: 600,
              }}
            >
              <Stepper activeStep={0} alternativeLabel>
                {steps.map(step => {
                  return (
                    <Step key={step.label} completed={step.completed}>
                      <StepLabel>{step.label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChromeInstallInProgressScreen
