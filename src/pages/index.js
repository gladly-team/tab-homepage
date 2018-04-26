import React from 'react'

import Section from 'components/Section'
import InstallButton from 'components/InstallButton'

const IndexPage = () => (
  <div>
    <Section wrap={'reverse'}>
      <div
        style={{
          // Placeholder for image
          background: '#ffeebf',
          width: '67%',
          maxWidth: 700,
          height: '67%',
          minHeight: 500, // probably remove after adding content
          marginTop: 20,
          marginRight: 20,
          marginBottom: 20,
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 220,
          marginTop: 20,
          marginBottom: 80,
          marginLeft: 80,
          marginRight: 60,
        }}
      >
        <h1>Surf the web, save the world</h1>
        <p>
          Raise money for charity every time you open a new browser tab. It
          doesn't cost you a thing.
        </p>
        <div>
          <InstallButton />
        </div>
      </div>
    </Section>
    <Section
      background={'dark'}
      fullWidth={true}
      style={{ flexDirection: 'row', justifyContent: 'center', padding: 80 }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>$504,300.29</h1>
        <p>raised for charity</p>
      </div>
    </Section>
    <Section>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 220,
          marginTop: 40,
          marginBottom: 40,
          marginLeft: 80,
          marginRight: 60,
        }}
      >
        <h1>Read some additional info here</h1>
        <p>
          And even more detail in this text, which makes you understand Tab for
          a Cause.
        </p>
      </div>
      <div
        style={{
          // Placeholder for image
          background: '#ffbfd1',
          width: '60%',
          maxWidth: 700,
          height: '60%',
          minHeight: 450, // probably remove after adding content
          marginTop: 20,
          marginLeft: 20,
          marginBottom: 20,
        }}
      />
    </Section>
    <Section wrap={'reverse'}>
      <div
        style={{
          // Placeholder for image
          background: '#ffbfd1',
          width: '60%',
          maxWidth: 700,
          height: '60%',
          minHeight: 450, // probably remove after adding content
          marginTop: 20,
          marginRight: 20,
          marginBottom: 20,
        }}
      />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 220,
          marginTop: 40,
          marginBottom: 40,
          marginLeft: 80,
          marginRight: 60,
        }}
      >
        <h1>You can even peruse this point</h1>
        <p>
          And hopefully, after reading it, you'll be even more informed and
          excited."
        </p>
      </div>
    </Section>
    <Section
      background={'dark'}
      fullWidth={true}
      style={{ flexDirection: 'column', justifyContent: 'center', padding: 80 }}
    >
      <div style={{ textAlign: 'center', flex: 1 }}>
        <h1>"Your browser tabs will help empower commmunities"</h1>
        <p>- The Huffington Post</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: 40,
        }}
      >
        <div
          style={{
            width: 80,
            height: 60,
            background: '#ccc',
            margin: 20,
          }}
        />
        <div
          style={{
            width: 80,
            height: 60,
            background: '#ccc',
            margin: 20,
          }}
        />
        <div
          style={{
            width: 80,
            height: 60,
            background: '#ccc',
            margin: 20,
          }}
        />
        <div
          style={{
            width: 80,
            height: 60,
            background: '#ccc',
            margin: 20,
          }}
        />
      </div>
    </Section>
    <Section
      style={{ flexDirection: 'row', justifyContent: 'center', padding: 80 }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Some other information here</h1>
        <p>
          One fish two fish red fish blue fish. One fish two fish red fish blue
          fish!
        </p>
      </div>
    </Section>
  </div>
)

export default IndexPage
