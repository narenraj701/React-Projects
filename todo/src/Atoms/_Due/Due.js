import React from 'react';
import Typography from '@material-ui/core/Typography';

const Due = ({ due }) => <Typography color="textSecondary" data-testid="duetext" gutterBottom>{due}</Typography>;

export default Due;