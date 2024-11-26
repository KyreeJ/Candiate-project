import React from 'react';
import Candidate from '../interfaces/Candidate.interface'; 

interface CandidateCardProps {
  candidate: Candidate;
  onSave: () => void;
  onSkip: () => void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, onSave, onSkip }) => {
  return (
    <div className="candidate-card">
      <div className="card-header">
        <img 
          src={candidate.profilePicture || candidate.Avatar} 
          alt={candidate.name} 
          className="avatar" 
        />
        <div className="candidate-info">
          <h2>{candidate.name}</h2>
          <p>{candidate.location || 'Location not available'}</p>
        </div>
      </div>

      <div className="card-body">
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Status:</strong> {candidate.status}</p>
        <p><strong>GitHub:</strong> <a href={candidate.github} target="_blank" rel="noopener noreferrer">{candidate.githubUser}</a></p>
        <p><strong>Followers:</strong> {candidate.followers}</p>
        <p><strong>Profile URL:</strong> <a href={candidate.URL} target="_blank" rel="noopener noreferrer">View Profile</a></p>
      </div>

      <div className="card-footer">
        <button onClick={onSave}>Save Candidate</button>
        <button onClick={onSkip}>Skip Candidate</button>
      </div>
    </div>
  );
};

export default CandidateCard
