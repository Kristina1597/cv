import { forwardRef } from 'react';
import useTranslation from '../../CustomHooks/CustomHooks';
import {
    companies,
    experience,
    projectsNumber,
    stackTechnologies
} from '../../content/content';
import { Box, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as MainIcon } from './../../assets/mainIcon.svg';

export const Description = forwardRef(({ executeScroll }, ref) => {
    const translation = useTranslation();

    return (
        <Box ref={ref}
             sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: {
                    md: 'row',
                    sm: 'column',
                    xs: 'column'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    marginRight: {
                        md: '98px',
                        sm: '0',
                        xs: '0'
                    },
                    marginBottom: '36px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: '21px'
                    }}>
                        <Typography sx={{fontSize: '23px'}}>
                            {translation.name}
                        </Typography>
                        <SvgIcon sx={{margin: '0 8px'}}
                                 component={MainIcon}
                                 inheritViewBox/>
                        <Typography sx={{fontSize: '23px'}}>
                            {translation.surname}
                        </Typography>
                    </Box>
                    <Box sx={{
                        maxWidth: '351px'
                    }}>
                        <Typography sx={{
                            whiteSpace: 'pre-wrap'
                        }}
                                    variant={'h2'}>
                            {translation.position}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '598px'
                }}>
                    <Typography marginBottom={'20px'}
                                variant={'h3'}>
                        {translation.commonDescription}
                    </Typography>
                    {translation.experienceDescription.map((i) =>
                        <Typography marginBottom='10px'
                                    key={i}
                                    variant={'body1'}>
                            {i}
                        </Typography>
                    )}
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Typography marginBottom='5px' >
                            Stack
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                            {stackTechnologies.map((i) =>
                                <Box key={i} sx={{
                                    margin: '0 5px 5px 0',
                                    padding: '3px 6px',
                                    backgroundColor: '#E94D35',
                                    borderRadius: '5px'
                                }}>
                                    <Typography sx={{
                                        color: '#ffffff',
                                        marginRight: '5px'
                                    }}>
                                        {i}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '27px',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography variant={'body2'} sx={{
                                textTransform: 'uppercase',
                                marginBottom: '9px',
                                color: '#E94D35'
                            }}>
                                {translation.liveIn}
                            </Typography>
                            <Typography variant={'h4'}>
                                {translation.city}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography variant={'body2'} sx={{
                                textTransform: 'uppercase',
                                marginBottom: '9px',
                                color: '#E94D35'
                            }}>
                                {translation.experience}
                            </Typography>
                            <Typography variant={'h4'}>
                                {experience + ' ' + translation.years}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography variant={'body2'} sx={{
                                textTransform: 'uppercase',
                                marginBottom: '9px',
                                color: '#E94D35'
                            }}>
                                {translation.dateOfBirth}
                            </Typography>
                            <Typography variant={'h4'}>
                                {translation.dateOfBirthValue}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                margin: {
                    sm: '70px 0 122px 0',
                    xs: '35px 0 122px 0'
                },
                flexDirection: 'row',
                border: '2px solid #332F29',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    padding: {
                        md: '23px 0 26px 0',
                        sm: '18px 0 20px 0',
                        xs: '12px 2px 15px 2px'
                    }
                }}>
                    <Typography variant={'h2'}>
                        {experience}
                    </Typography>
                    <Typography sx={{
                        textAlign: 'center'
                    }} variant={'body2'}>
                        {translation.experienceYears}
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: '#161513',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography sx={{
                        color: '#ffffff'
                    }} variant={'h2'}>
                        {projectsNumber}
                    </Typography>
                    <Typography color='#ffffff'
                                variant={'body2'}>
                        {translation.projectsCount}
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>
                    <Typography variant={'h2'}>
                        {companies}
                    </Typography>
                    <Typography variant={'body2'}>
                        {translation.companiesCount}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
});