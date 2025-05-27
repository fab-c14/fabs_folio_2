import { Card, CardContent, CardMedia, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Project({
  name,
  pic,
  sourceCode,
  liveLink,
  desc,
  skills,
  date,
  stackIcons = [],
}) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Card sx={{
        display: 'flex',
        mb: 3,
        borderRadius: 3,
        boxShadow: 6,
        bgcolor: 'background.paper',
        alignItems: 'stretch',
        minHeight: 200
      }}>
        <CardMedia
          component="img"
          image={pic}
          alt={name}
          sx={{ width: 180, objectFit: 'cover' }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>{name}</Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            {stackIcons.map((icon, idx) => (
              <img key={idx} src={icon} alt="" style={{ height: 28 }} />
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">{desc}</Typography>
          <Typography variant="caption" color="text.secondary" display="block" sx={{ my: 1 }}>{skills} | {date}</Typography>
          <Stack direction="row" spacing={1}>
            {liveLink && (
              <Button size="small" href={liveLink} target="_blank" startIcon={<FaExternalLinkAlt />}>
                Live
              </Button>
            )}
            {sourceCode && (
              <Button size="small" href={sourceCode} target="_blank" startIcon={<FaGithub />}>
                Code
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}