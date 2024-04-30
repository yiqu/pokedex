import type { Comment } from '@/shared/models/game';
import { getCommentListByGameVersion } from '@/lib/api/pokemon-data.api';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default async function CommentList({ versionId }: { versionId: string }) {
  const comments: Comment[] = await getCommentListByGameVersion(versionId);

  if (comments.length === 0) {
    return <Typography variant="body1">No reviews yet. Be the first to review!</Typography>;
  }

  return (
    <Stack spacing={ 4 }>
      { comments.map((comment) => {
        return (
          <Stack key={ comment.fireKey } direction="column" justifyContent="start" alignItems="start" spacing={ 0.25 }>
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 }>
              <PersonOutlineIcon fontSize="large" />
              <Typography variant="body1">Anonymous</Typography>
            </Stack>
            <Rating name="read-only" value={ +comment.rating } readOnly size="small" />
            <Typography variant="caption">Reviewed in the United States on: { comment.commentDateDisplay }</Typography>
            <Typography variant="body1">{ comment.comment }</Typography>
          </Stack>
        );
      }) }
    </Stack>
  );
}
