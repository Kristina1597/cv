import * as React from 'react';
import { useState } from 'react';
import { useLanguageContext } from '../../Contexts/LanguageContext';
import { socialMediaLinks } from '../../content/content';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';

export const Header = ({navMenuItems, handleScrollToPage}) => {
    const {language, changeLanguage} = useLanguageContext();

    const handleNavMenuItemClick = (page) => {
        handleScrollToPage(page);
    };

    const handleActionClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <AppBar position='static'
                enableColorOnDark={true}
                color='transparent'
                sx={{
                    boxShadow: 0,
                    height: '96px',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
            >
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: {
                        sm: 'flex-start',
                        xs: 'space-between'
                    }
                }}>
                    {navMenuItems.map((i) => (
                        <Button onClick={() => handleNavMenuItemClick(i)}
                                key={i}
                                sx={{
                                    margin: '0 32px 0 0',
                                    padding: '6px 0',
                                    outline: 'none',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid transparent',
                                    borderRadius: '0',
                                    transition: 'borderBottom .2s',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        borderBottom: '1px solid #161513',
                                        cursor: 'pointer'
                                    },
                                    '&:last-child': {
                                        marginRight: 0
                                    }
                                }}>
                            <Typography color='#161513' variant={'body1'}>
                                {i}
                            </Typography>
                        </Button>
                    ))}
                </Box>
                <Box sx={{
                    display: {
                        sm: 'flex',
                        xs: 'none'
                    }
                }}>
                    {socialMediaLinks.map((i) => (
                        <IconButton
                            sx={{
                                padding: {
                                    md: '15px',
                                    sm: '10px',
                                    xs: '5px'
                                },
                                marginLeft: '10px'
                            }}
                            key={i.name}
                            onClick={() => handleActionClick(i.link)}
                        >
                            {i.icon}
                        </IconButton>
                    ))}
                </Box>
                <Box sx={{
                    display: 'flex'
                }}>
                    {language === 'en' ?
                        <Button disableRipple
                                value='ru'
                                color='main'
                                sx={{
                                    height: '30px',
                                    width: '30px',
                                    backgroundColor: 'transparent',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    }
                                }}
                                onClick={(e) => changeLanguage(e.target.value)}
                        >
                            RU
                        </Button>
                        : <Button disableRipple
                                  value='en'
                                  color='main'
                                  sx={{
                                      height: '30px',
                                      width: '30px',
                                      backgroundColor: 'transparent',
                                      '&:hover': {
                                          backgroundColor: 'transparent',

                                      }
                                  }}
                                  onClick={(e) => changeLanguage(e.target.value)}>
                            EN
                        </Button>
                    }
                </Box>
            </Box>
        </AppBar>
    );
};