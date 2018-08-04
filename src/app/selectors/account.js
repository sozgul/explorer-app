import { createSelector } from 'reselect';

const accountUserIdSelector = state => state.userId;
const accountVerificationStatusSelector = state => state.verificationStatus;

export const isUserSignedUpSelector = createSelector(
  accountUserIdSelector,
  accountVerificationStatusSelector,
  (userId, verificationStatus) => {
    const isVerified = verificationStatus === 'verified';
    const hasUserId = !!userId;

    return isVerified && hasUserId;
  }
);
