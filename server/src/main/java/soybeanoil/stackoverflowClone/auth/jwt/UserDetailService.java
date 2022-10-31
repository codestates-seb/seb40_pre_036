package soybeanoil.stackoverflowClone.auth.jwt;

import org.springframework.stereotype.Component;
import soybeanoil.stackoverflowClone.auth.utils.CustomAuthorityUtils;
import soybeanoil.stackoverflowClone.user.entity.User;
import soybeanoil.stackoverflowClone.user.repository.UserRepository;

import java.util.Collection;
import java.util.Optional;

@Component
public class UserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;

    public UserDetailService(UserRepository userRepository, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalMember = userRepository.findByEmail(username);
        User findUser = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return new UserDetail(findUser);
    }

    public class UserDetail extends User implements UserDetails {
        private User user;

        UserDetail(User user) {
            setUserId(user.getUserId());
            setEmail(user.getEmail());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        public User getUser() {
            return user;
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}