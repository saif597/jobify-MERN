import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnConatiner from './PageBtnConatiner'
import { useAllJobContext } from '../pages/AllJobs'

const JobsContainer = () => {
  const { data } = useAllJobContext()
  const { jobs, totalJobs, numOfPages } = data
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {numOfPages > 1 && <PageBtnConatiner />}
    </Wrapper>
  )
}

export default JobsContainer
