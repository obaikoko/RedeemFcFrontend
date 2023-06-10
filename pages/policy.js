import Head from 'next/head';

const policy = () => {
  return (
    <div>
      <Head>
        <title>Redeem FC Players</title>
      </Head>

      <div className='container'>
        <h1 className='text-center'>Rules and Regulations</h1>
        <hr />

        <div className='card mb-3'>
          <div className='card-header bg-primary text-white'>Membership</div>
          <div className='card-body'>
            <h5 className='card-title'>1. Eligibility</h5>
            <p className='card-text'>
              To become a member of Redeem Football Club, you must be at least
              18 years old and passionate about football.
            </p>
            <h5 className='card-title'>2. Application</h5>
            <p className='card-text'>
              Interested individuals can apply for membership by completing the
              application form and submitting it to the club management.
            </p>
          </div>
        </div>

        <div className='card mb-3'>
          <div className='card-header bg-success text-white'>Training</div>
          <div className='card-body'>
            <h5 className='card-title'>1. Attendance</h5>
            <p className='card-text'>
              All members are required to attend training sessions regularly.
              Missing more than three consecutive sessions without valid reasons
              may result in membership termination.
            </p>
            <h5 className='card-title'>2. Discipline</h5>
            <p className='card-text'>
              Members should maintain discipline during training, follow
              instructions from the coach, and respect fellow players.
            </p>
          </div>
        </div>

        <div className='card mb-3'>
          <div className='card-header bg-warning text-white'>Matches</div>
          <div className='card-body'>
            <h5 className='card-title'>1. Uniform</h5>
            <p className='card-text'>
              All players must wear the official club uniform during matches.
              Failure to comply may result in disqualification from the game.
            </p>
            <h5 className='card-title'>2. Fair Play</h5>
            <p className='card-text'>
              Redeem Football Club promotes fair play. Players should abide by
              the rules of the game, respect the decisions of referees, and
              avoid unsportsmanlike behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default policy;
